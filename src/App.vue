<template>
  <div id="app">
    <z-select-tree
      v-model="contentsortId"
      :tree-data="classTree"
      :props="props"
     />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      contentsortId: '',
      props:{
        children:'nextNode',
        id:'addressId',
        label: 'addressName'
      },
      classTree: [
        {
          addressId: '97736674db97445f8cdf5335891d46b4',
          addressName: '台州市1',
          parentId: '-1',
          fullName: '杭州市台州市',
          nextNode: [
            {
              addressId: '4795a0a6ce8d4708b99a776e5319ec71',
              addressName: '01市1',
              parentId: '97736674db97445f8cdf5335891d46b4',
              fullName: '杭州市01市1',
              nextNode: [],
            },
            {
              addressId: 'b54fbf6121894e438020bf2e008b9a50',
              addressName: '02市',
              parentId: '97736674db97445f8cdf5335891d46b4',
              fullName: '杭州市02市',
              nextNode: [
                {
                  addressId: '0b19437a18f04467aac211b0c4ecacf1',
                  addressName: '02市街道',
                  parentId: 'b54fbf6121894e438020bf2e008b9a50',
                  fullName: '02市街道',
                  nextNode: [
                    {
                      addressId: '9f3d226c2daa49c3a686dbc80633f7e7',
                      addressName: '西湖小区',
                      parentId: '0b19437a18f04467aac211b0c4ecacf1',
                      fullName: '西湖小区',
                      nextNode: [],
                    },
                    {
                      addressId: '67758fbf26c6469488e0383c70f5ec72',
                      addressName: '西湖小区',
                      parentId: '0b19437a18f04467aac211b0c4ecacf1',
                      fullName: '西湖小区',
                      nextNode: [],
                    },
                    {
                      addressId: '86c66f2f691f434fb4469a30f0a4dac8',
                      addressName: '小区211',
                      parentId: '0b19437a18f04467aac211b0c4ecacf1',
                      fullName: '小区21',
                      nextNode: [
                        {
                          addressId: '1f571ad7820741ae8bf8550af683576e',
                          addressName: '13楼',
                          parentId: '86c66f2f691f434fb4469a30f0a4dac8',
                          fullName: '13楼',
                          nextNode: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              addressId: '13b50863db5640ab98c32c6938147e84',
              addressName: '新增2',
              parentId: '97736674db97445f8cdf5335891d46b4',
              fullName: '杭州新增2',
              nextNode: [
                {
                  addressId: 'a39aa15013fd41d8a0d0785e69832d18',
                  addressName: '02',
                  parentId: '13b50863db5640ab98c32c6938147e84',
                  fullName: '0202',
                  nextNode: [],
                },
              ],
            },
            {
              addressId: '5da5da5c88184f39aa51183ee0fcbd87',
              addressName: '新增3',
              parentId: '97736674db97445f8cdf5335891d46b4',
              fullName: '新增3',
              nextNode: [],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
