/* helpers (begin) */
const DATA_LOCAL_STORAGE_ID = 'DATA_LOCAL_STORAGE_ID'

/**
 *
 * @param {*} data Данные любого типа
 * @param {String} [key=''] Опциональный параметр, по умолчанию пустая строка
 */
function saveDataToLocal (data, key = '') {
  /**
   * localStorage умеет сохранять только строки
   * @see https://learn.javascript.ru/localstorage
   */
  localStorage.setItem(`${DATA_LOCAL_STORAGE_ID}_${key}`, JSON.stringify(data))
}

/**
 * @param {String} [key=''] Опциональный параметр, по умолчанию пустая строка
 */
function getDataFromLocal (key = '') {
  let data

  // Тут возможна ошибка парсинга
  try {
    const dataString = localStorage.getItem(`${DATA_LOCAL_STORAGE_ID}_${key}`)
    data = JSON.parse(dataString)
  } catch (error) {
    console.error(error)
  }

  return data
}

/* helpers (end) */
