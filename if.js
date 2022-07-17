function hoge (){
  if (this.parallelSupportStatus === 'enabled') {
    return parallelCount;
  } else {
    return nonparallelCount;
  }
}
