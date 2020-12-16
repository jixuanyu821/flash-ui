<template>
  <div id="app">
    <div>
      <el-divider>基础用法</el-divider>
      <div class="contanier">
        <div>
          <h5>树结构</h5>
          <f-tree :tree-data="classTree" :props="props" />
        </div>
        <div>
          <h5>下拉树</h5>
          <f-select-tree
            v-model="contentsortId"
            :tree-data="classTree"
            :props="props"
          />
        </div>
      </div>
    </div>
    <div>
      <el-divider>添加按钮</el-divider>
      <div class="contanier">
        <div>
          <h5>自带按钮(增删改三种)</h5>
          <f-tree
            :addBtn="true"
            :editBtn="true"
            :deleteBtn="true"
            @addNode="addNode"
            @editNode="editNode"
            @deleteNode="deleteNode"
            :tree-data="classTree"
            :props="props"
          />
        </div>
        <div>
          <h5>自定义按钮(树组件)</h5>
          <f-tree
            :tree-data="classTree"
            :props="props"
          >
          <div slot="btn"  class="self-btns" slot-scope="{ node, data }">
            <i class="el-icon-video-play btn-item" @click.stop="() => nodePlay(node,data)" />
            <i class="el-icon-video-pause btn-item" @click.stop="() => nodePause(node,data)" />
          </div>
          </f-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      contentsortId: '',
      props: {
        children: 'nextNode',
        id: 'addressId',
        label: 'addressName',
      },
      classTree: [
        {
          addressId: '1',
          addressName: '台州市1',
          parentId: '-1',
          fullName: '杭州市台州市',
          nextNode: [
            {
              addressId: '2',
              addressName: '01市1',
              parentId: '1',
              fullName: '杭州市01市1',
              nextNode: [],
            },
            {
              addressId: '3',
              addressName: '02市',
              parentId: '1',
              fullName: '杭州市02市',
              nextNode: [
                {
                  addressId: '4',
                  addressName: '02市街道',
                  parentId: '3',
                  fullName: '02市街道',
                  nextNode: [
                    {
                      addressId: '5',
                      addressName: '西湖小区',
                      parentId: '4',
                      fullName: '西湖小区',
                      nextNode: [],
                    },
                    {
                      addressId: '6',
                      addressName: '西湖小区',
                      parentId: '4',
                      fullName: '西湖小区',
                      nextNode: [],
                    },
                    {
                      addressId: '7',
                      addressName: '小区211',
                      parentId: '4',
                      fullName: '小区21',
                      nextNode: [
                        {
                          addressId: '8',
                          addressName: '13楼',
                          parentId: '7',
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
  methods:{
    deleteNode(){
      this.$message.error('点击删除了')
    },
    addNode(){
      this.$message.success('点击添加了')
    },
    editNode(){
      this.$message.warning('点击编辑了了')
    },
    nodePlay(node, data){
      console.log(node, data)
      this.$message.success('点击了播放')
    },
    nodePause(node, data){
      console.log(node, data)
      this.$message.success('点击了暂停')
    },

  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .contanier {
    display: flex;
    justify-content: space-around;
    & > div {
      border: 1px solid #e5e5e5;
      width: 400px;
      padding: 20px;
      min-height: 500px;
    }
  }
}
</style>
