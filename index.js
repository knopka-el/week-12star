const str = '<h1>hello</h1>';
function deleteTags(str) {
    const regex = /( |<([^>]+)>)/ig;
    result = str.replace(regex, " ");
    return result;
  }

