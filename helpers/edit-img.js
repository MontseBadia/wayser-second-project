function editImg (url) {
  var array = [];
  array = url.split('/');
  array.splice(6, 0, 'w_1500,h_1500,c_crop,g_face/w_200');
  array = array.join('/');
  return array;
}

module.exports = editImg;
