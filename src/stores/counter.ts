import { defineStore } from 'pinia'
import {auth} from '@/firebase/config'
import {
  createUserWithEmailAndPassword
} from 'firebase/auth'
export const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    user : {}
  }),
  getters: {
   
  },
  actions: {
    async setUser({email,password}:any) {
        const res = await createUserWithEmailAndPassword(auth,email,password)
      if(res){
      console.log("🚀 ~ file: counter.ts ~ line 18 ~ setUser ~ res", res)
        this.user = res.user
      }else{
        throw new Error('Sign up failed')
      }
     
    }
  }
})
