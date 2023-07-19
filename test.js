const myFruits = ["りんご", "みかん", "すいか"];
myFruits.splice(1, 0, "いちご", "めろん");
const newFruits = myFruits.filter((fruit) => {
	// return fruit.search("ん") === (1 || 2);
	return fruit.search("ん") === 1 || fruit.search("ん") === 2;
});

console.log(newFruits)