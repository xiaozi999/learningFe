import { h } from 'vue'

const stack = {
  render(){
    const slot = this.$slots.default?this.$slots.default():[]
    return h('div',{ class: 'stack'},slot.map(item=>{
      return h('div',{class:`m-${this.$props.size}`},[item])
    }))
  }
}

