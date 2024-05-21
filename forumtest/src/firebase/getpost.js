import { ref } from 'vue'
import { projectFirestore } from '../firebase/Config.js'

const getpost = (id) => {

  const post = ref({});
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFirestore.collection('posts').doc(id).get()

      if (!res.exists) {
        throw Error('That post does not exist')
      }
      post.value = { ...res.data(), id: res.id }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getpostfghgsfh