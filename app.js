	Vue.createApp({
		data() {
		return {
			name: 'Hello Vue!',
			gender: 'male',
			pic: 'url'
		}
		},
		methods: {
			async getuser(){
				const res = await fetch('https://randomuser.me/api/')
				result = await res.json()
				this.name = result["results"][0].name.first
				this.gender = result["results"][0].gender
				this.pic = result["results"][0].picture.large
				console.log( result["results"][0].picture.large)
			}
		}
	}).mount('#app')
