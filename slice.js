// mock差し替え処理のため、domain/infraの呼び出しより先にimportすること
import 'src/test-mock-loader'
import { Event, EventStatus } from 'src/domains/events/Event'
import { EventScope } from 'src/domains/events/EventScope'
import { ItemName, ItemNameType, PickUpItemSetting } from 'src/domains/events/PickUpItemSetting'
import { AlertPattern, FeverAlertSetting } from 'src/domains/events/FeverAlertSetting'
import { SymptomAlertSetting } from 'src/domains/events/SymptomAlertSetting'
import { User } from 'src/domains/users/User'
import { Group } from 'src/domains/groups/Group'
import UnchangeableError from 'src/domains/errors/UnchangeableError'
import { ErrorMsg } from 'src/domains/errors/ErrorMsg'
import UpdateEventService from 'src/applicationServices/events/UpdateEventService'
import NotFoundError, { ModelName } from 'src/applicationServices/errors/NotFoundError'
import MockEventRepository from 'src/infras/repositories/EventRepository'
import { mockTransaction } from 'src/infras/sequelizes/__mocks__/TransactionManager'
import { MockUuid } from 'src/infras/systems/__mocks__/IdGenerator'
import dayjs from 'src/libs/dayjs'
import InvalidRequestError from 'src/applicationServices/errors/InvalidRequestError'
import { mockUserValueFactory } from 'src/domains/users/__test__/MockValueFactory'
import { mockEventValueFactory } from 'src/domains/events/__test__/MockValueFactory'
import { PaymentItemType } from 'src/domains/orders/PaymentItem'
import { PaymentStatus } from 'src/domains/orders/Order'

describe('UpdateEventService', (): void => {
  const service = new UpdateEventService()

  afterEach(() => {
    jest.restoreAllMocks()
  })

  const mockEventDefaultValue = mockEventValueFactory()

  describe('前提：イベントが登録されていない', (): void => {
    beforeEach(() => {
      jest.spyOn(MockEventRepository.prototype, 'fetchById')
      jest.spyOn(MockEventRepository.prototype, 'save')
    })

    describe('条件：任意の設定を指定する', (): void => {
      const anyEventId = 'event.id'
      const eventName = 'event.update.name'
      const anyNumberOfUsers = 200
      const anyStartDate = dayjs()
      const anyEndDate = dayjs()
      const anyHealthWatchScopeDayBeforeEventStart = 3
      const anyHealthWatchScopeDayAfterEventEnd = 3
      const anyPickUpItems = [ItemName.BODY_TEMP]
      const execute = async () =>
        service.execute(
          anyEventId,
          eventName,
          anyNumberOfUsers,
          anyStartDate,
          anyEndDate,
          anyHealthWatchScopeDayBeforeEventStart,
          anyHealthWatchScopeDayAfterEventEnd,
          anyPickUpItems
        )

      test('結果：イベント取得エラーが起きる', async () => {
        await expect(execute()).rejects.toThrowError(new NotFoundError(ModelName.EVENT))
      })

      test('結果：リポジトリから取得している', async () => {
        await expect(execute()).rejects.toThrow()
        expect(MockEventRepository.prototype.fetchById).toBeCalledWith('event.id')
      })

      test('結果：イベントの保存を行わない', async () => {
        await expect(execute()).rejects.toThrow()
        expect(MockEventRepository.prototype.save).toBeCalledTimes(0)
      })
    })
  })

  describe('前提：イベントが登録されている', (): void => {
    describe('条件：情報取得設定で[体温]を指定しない', (): void => {
      let mockEvent: Event
      beforeEach(() => {
        mockEvent = new Event(mockEventDefaultValue)
        jest.spyOn(MockEventRepository.prototype, 'fetchById').mockReturnValue(Promise.resolve(mockEvent))
        jest.spyOn(MockEventRepository.prototype, 'save')
      })
      const anyEventId = 'event.id'
      const eventName = 'event.update.name'
      const anyNumberOfUsers = 200
      const anyStartDate = dayjs()
      const anyEndDate = dayjs()
      const anyHealthWatchScopeDayBeforeEventStart = 3
      const anyHealthWatchScopeDayAfterEventEnd = 3
      const anyPickUpItems: ItemNameType[] = []
      const execute = async () =>
        service.execute(
          anyEventId,
          eventName,
          anyNumberOfUsers,
          anyStartDate,
          anyEndDate,
          anyHealthWatchScopeDayBeforeEventStart,
          anyHealthWatchScopeDayAfterEventEnd,
          anyPickUpItems
        )

      describe('条件：参加者が存在しない', (): void => {
        test('結果：不正リクエストエラーが発生する', async () => {
          await expect(execute()).rejects.toThrowError(new InvalidRequestError())
        })

        test('結果：イベントの保存を行わない', async () => {
          await expect(execute()).rejects.toThrow()
          expect(MockEventRepository.prototype.save).toBeCalledTimes(0)
        })
      })
    })

    describe('条件：任意の設定を指定する', (): void => {
      let mockEvent: Event

      beforeEach(() => {
        mockEvent = new Event(mockEventDefaultValue)
        jest.spyOn(MockEventRepository.prototype, 'fetchById').mockReturnValue(Promise.resolve(mockEvent))
        jest.spyOn(MockEventRepository.prototype, 'save')
        jest.spyOn(mockEvent, 'updateInformation')
      })

      const anyEventId = 'event.id'
      const anyEventName = 'event.update.name'
      const anyNumberOfUsers = 200
      const anyStartDate = dayjs()
      const anyEndDate = dayjs()
      const anyHealthWatchScopeDayBeforeEventStart = 3
      const anyHealthWatchScopeDayAfterEventEnd = 3
      const anyPickUpItems = [ItemName.BODY_TEMP]
      const execute = async () =>
        service.execute(
          anyEventId,
          anyEventName,
          anyNumberOfUsers,
          anyStartDate,
          anyEndDate,
          anyHealthWatchScopeDayBeforeEventStart,
          anyHealthWatchScopeDayAfterEventEnd,
          anyPickUpItems
        )

      describe('条件：参加者が存在しない', (): void => {
        test('結果：処理が完了する', async () => {
          await expect(execute()).resolves.toHaveProperty('numberOfUsers', 200)
          await expect(execute()).resolves.toHaveProperty(
            'eventScope',
            new EventScope({
              startDate: anyStartDate,
              endDate: anyEndDate,
              healthWatchScopeDayBeforeEventStart: anyHealthWatchScopeDayBeforeEventStart,
              healthWatchScopeDayAfterEventEnd: anyHealthWatchScopeDayAfterEventEnd,
            })
          )
          await expect(execute()).resolves.toHaveProperty('pickUpItemSettings', [
            new PickUpItemSetting(mockEventDefaultValue.id, ItemName.BODY_TEMP),
          ])
        })

        test('結果：イベント情報の更新が成功する', async () => {
          await execute()
          expect(mockEvent.updateInformation).toBeCalledWith(
            anyEventName,
            anyNumberOfUsers,
            anyStartDate,
            anyEndDate,
            anyHealthWatchScopeDayBeforeEventStart,
            anyHealthWatchScopeDayAfterEventEnd,
            anyPickUpItems
          )
        })

        test('結果：イベントの保存が成功する', async () => {
          await execute()
          expect(MockEventRepository.prototype.save).toBeCalledWith(mockEvent, mockTransaction)
        })
      })

      describe('条件：参加者が存在する', (): void => {
        describe('条件：ユーザが存在する', (): void => {
          const mockUser = new User(mockUserValueFactory())

          beforeEach(() => {
            mockEvent.acceptanceParticipant(mockUser)
          })

          test('結果：イベント変更不可エラーが起きる', async () => {
            await expect(execute()).rejects.toThrowError(new UnchangeableError(ErrorMsg.Event.Unchangeable))
          })

          test('結果：リポジトリから取得している', async () => {
            await expect(execute()).rejects.toThrow()
            expect(MockEventRepository.prototype.fetchById).toBeCalledWith('event.id')
          })

          test('結果：イベントの保存を行わない', async () => {
            await expect(execute()).rejects.toThrow()
            expect(MockEventRepository.prototype.save).toBeCalledTimes(0)
          })
        })

        describe('条件：グループが存在する', (): void => {
          const mockGroup = new Group({
            id: 'group.id',
            name: 'group.name',
            members: [],
          })

          beforeEach(() => {
            mockEvent.acceptanceParticipant(mockGroup)
          })

          test('結果：イベント変更不可エラーが起きる', async () => {
            await expect(execute()).rejects.toThrowError(new UnchangeableError(ErrorMsg.Event.Unchangeable))
          })

          test('結果：リポジトリから取得している', async () => {
            await expect(execute()).rejects.toThrow()
            expect(MockEventRepository.prototype.fetchById).toBeCalledWith('event.id')
          })

          test('結果：イベントの保存を行わない', async () => {
            await expect(execute()).rejects.toThrow()
            expect(MockEventRepository.prototype.save).toBeCalledTimes(0)
          })
        })
      })
    })
    describe('条件：情報取得設定に症状を指定する', (): void => {
      let mockEvent: Event
      const expectedSymptomAlertSetting = new SymptomAlertSetting({
        eventId: 'event.id',
        isEnabled: true,
        percentageThreshold: 1,
      })

      beforeEach(() => {
        mockEvent = new Event(
          Object.assign(mockEventDefaultValue, { symptomAlertSetting: expectedSymptomAlertSetting })
        )
        jest.spyOn(MockEventRepository.prototype, 'fetchById').mockReturnValue(Promise.resolve(mockEvent))
      })

      const anyEventId = 'event.id'
      const eventName = 'event.update.name'
      const anyNumberOfUsers = 200
      const anyStartDate = dayjs()
      const anyEndDate = dayjs()
      const anyhealthWatchScopeDayBeforeEventStart = 3
      const anyhealthWatchScopeDayAfterEventEnd = 3
      const anyPickUpItems = [ItemName.BODY_TEMP, ItemName.SYMPTOMS]
      const execute = async () =>
        service.execute(
          anyEventId,
          eventName,
          anyNumberOfUsers,
          anyStartDate,
          anyEndDate,
          anyhealthWatchScopeDayBeforeEventStart,
          anyhealthWatchScopeDayAfterEventEnd,
          anyPickUpItems
        )

      test('結果：有症状者アラートの有効フラグがtrueになっている', async () => {
        await expect(execute()).resolves.toHaveProperty('symptomAlertSetting', expectedSymptomAlertSetting)
        await expect(execute()).resolves.toHaveProperty('pickUpItemSettings', [
          new PickUpItemSetting(mockEventDefaultValue.id, ItemName.BODY_TEMP),
          new PickUpItemSetting(mockEventDefaultValue.id, ItemName.SYMPTOMS),
        ])
      })
    })
    describe('条件：情報取得設定に症状を指定しない', (): void => {
      let mockEvent: Event

      beforeEach(() => {
        mockEvent = new Event(mockEventDefaultValue)
        jest.spyOn(MockEventRepository.prototype, 'fetchById').mockReturnValue(Promise.resolve(mockEvent))
      })

      const anyEventId = 'event.id'
      const eventName = 'event.update.name'
      const anyNumberOfUsers = 200
      const anyStartDate = dayjs()
      const anyEndDate = dayjs()
      const anyhealthWatchScopeDayBeforeEventStart = 3
      const anyhealthWatchScopeDayAfterEventEnd = 3
      const anyPickUpItems = [ItemName.BODY_TEMP]
      const execute = async () =>
        service.execute(
          anyEventId,
          eventName,
          anyNumberOfUsers,
          anyStartDate,
          anyEndDate,
          anyhealthWatchScopeDayBeforeEventStart,
          anyhealthWatchScopeDayAfterEventEnd,
          anyPickUpItems
        )

      test('結果：有症状者アラートの有効フラグがfalseになっている', async () => {
        await expect(execute()).resolves.toHaveProperty(
          'symptomAlertSetting',
          mockEventDefaultValue.symptomAlertSetting
        )
        await expect(execute()).resolves.toHaveProperty('pickUpItemSettings', [
          new PickUpItemSetting(mockEventDefaultValue.id, ItemName.BODY_TEMP),
        ])
      })
    })
    describe('条件：イベントに紐づく決済ステータスが[決済済み]', (): void => {
      let mockEvent: Event
      const paymentSettledEventMockValues = mockEventValueFactory({
        paymentStatus: PaymentStatus.SETTLED,
      })

      beforeEach(() => {
        mockEvent = new Event(paymentSettledEventMockValues)
        jest.spyOn(MockEventRepository.prototype, 'fetchById').mockReturnValue(Promise.resolve(mockEvent))
        jest.spyOn(MockEventRepository.prototype, 'save')
      })

      const anyEventId = 'event.id'
      const anyEventName = 'event.update.name'
      const anyNumberOfUsers = 200
      const anyStartDate = dayjs().add(1, 'hour')
      const anyEndDate = dayjs().add(1, 'hour')
      const anyhealthWatchScopeDayBeforeEventStart = 3
      const anyhealthWatchScopeDayAfterEventEnd = 3
      const anyPickUpItems = [ItemName.BODY_TEMP, ItemName.AGE]
      const execute = async () =>
        service.execute(
          anyEventId,
          anyEventName,
          anyNumberOfUsers,
          anyStartDate,
          anyEndDate,
          anyhealthWatchScopeDayBeforeEventStart,
          anyhealthWatchScopeDayAfterEventEnd,
          anyPickUpItems
        )

      test('結果：[イベント名],[情報取得設定]以外の情報が更新されないこと', async () => {
        await execute()
        expect(MockEventRepository.prototype.save).toBeCalledWith(
          new Event({
            id: paymentSettledEventMockValues.id,
            loginId: paymentSettledEventMockValues.loginId,
            name: anyEventName,
            numberOfUsers: paymentSettledEventMockValues.numberOfUsers,
            eventScope: paymentSettledEventMockValues.eventScope,
            feverAlertSetting: paymentSettledEventMockValues.feverAlertSetting,
            symptomAlertSetting: paymentSettledEventMockValues.symptomAlertSetting,
            pickUpItemSettings: [
              new PickUpItemSetting(paymentSettledEventMockValues.id, ItemName.BODY_TEMP),
              new PickUpItemSetting(paymentSettledEventMockValues.id, ItemName.AGE),
            ],
            participants: paymentSettledEventMockValues.participants,
            participantGroups: paymentSettledEventMockValues.participantGroups,
            administrators: paymentSettledEventMockValues.administrators,
            status: paymentSettledEventMockValues.status,
            note: paymentSettledEventMockValues.note,
            generatedAt: paymentSettledEventMockValues.generatedAt,
            orderId: paymentSettledEventMockValues.orderId,
            paymentStatus: paymentSettledEventMockValues.paymentStatus,
            paymentItemType: paymentSettledEventMockValues.paymentItemType,
          }),
          mockTransaction
        )
      })
    })
    describe('条件：イベントに紐付く決済商品種別が[一回使い切り]', (): void => {
      let mockEvent: Event
      const outrightEventMockValues = mockEventValueFactory({
        paymentItemType: PaymentItemType.OUTRIGHT,
      })

      beforeEach(() => {
        mockEvent = new Event(outrightEventMockValues)
        jest.spyOn(MockEventRepository.prototype, 'fetchById').mockReturnValue(Promise.resolve(mockEvent))
        jest.spyOn(MockEventRepository.prototype, 'save')
      })

      const anyEventId = 'event.id'
      const anyEventName = 'event.update.name'
      const anyNumberOfUsers = 200
      const anyStartDate = dayjs().add(1, 'hour')
      const anyEndDate = dayjs().add(1, 'hour')
      const anyhealthWatchScopeDayBeforeEventStart = 3
      const anyhealthWatchScopeDayAfterEventEnd = 3
      const anyPickUpItems = [ItemName.BODY_TEMP, ItemName.AGE]
      const execute = async () =>
        service.execute(
          anyEventId,
          anyEventName,
          anyNumberOfUsers,
          anyStartDate,
          anyEndDate,
          anyhealthWatchScopeDayBeforeEventStart,
          anyhealthWatchScopeDayAfterEventEnd,
          anyPickUpItems
        )

      test('結果：[イベント名],[情報取得設定]以外の情報が更新されないこと', async () => {
        await execute()
        expect(MockEventRepository.prototype.save).toBeCalledWith(
          new Event({
            id: outrightEventMockValues.id,
            loginId: outrightEventMockValues.loginId,
            name: anyEventName,
            numberOfUsers: outrightEventMockValues.numberOfUsers,
            eventScope: outrightEventMockValues.eventScope,
            feverAlertSetting: outrightEventMockValues.feverAlertSetting,
            symptomAlertSetting: outrightEventMockValues.symptomAlertSetting,
            pickUpItemSettings: [
              new PickUpItemSetting(outrightEventMockValues.id, ItemName.BODY_TEMP),
              new PickUpItemSetting(outrightEventMockValues.id, ItemName.AGE),
            ],
            participants: outrightEventMockValues.participants,
            participantGroups: outrightEventMockValues.participantGroups,
            administrators: outrightEventMockValues.administrators,
            status: outrightEventMockValues.status,
            note: outrightEventMockValues.note,
            generatedAt: outrightEventMockValues.generatedAt,
            orderId: outrightEventMockValues.orderId,
            paymentStatus: outrightEventMockValues.paymentStatus,
            paymentItemType: outrightEventMockValues.paymentItemType,
          }),
          mockTransaction
        )
      })
    })
  })
})
