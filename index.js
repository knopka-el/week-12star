function deleteTags(str) {
    let regex = /( <([^>]+)>)/ig;
    result = str.replace (regex, " ");
    return result;
  }
