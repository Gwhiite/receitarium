import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = (key, value) => {
  return new Promise(async (rs, rj) => {
    try {
      await AsyncStorage.setItem(key, value);
      rs()
    } catch (e) {
      rj(e)
    }
  })
};

const getData = (key) => {
  return new Promise(async (rs, rj) =>{
    try {
      const value = await AsyncStorage.getItem(key);
      rs(value)
    } catch (e) {
      rj(e)
    }
  })
};

const getJSONData = (key) => {
  return new Promise(async (rs, rj) => {
    try {
      const value = await AsyncStorage.getItem(key);
      rs(JSON.parse(value))
    } catch (e) {
      rj(e)
    }
  })
}

const storeJSONData = (key, value) => {
  return new Promise(async (rs, rj) => {
    try {
      let plainValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, plainValue);
      rs()
    } catch (e) {
      rj(e)
    }
  })
}

const appendData = (key, value) => {
  return new Promise(async (rs, rj) => {
    try {
      let c = await getJSONData(key)
      if (!c) {
        c = []
      }

      c.push(value)
      c = new Set(c)
      await storeJSONData(key, [...c])
    } catch (e) {
      rj(e)
    }
  })
}

export {
  storeData,
  getData,
  getJSONData,
  storeJSONData,
  appendData
}