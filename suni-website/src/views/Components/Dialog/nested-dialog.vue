<template>
	<si-button @click="active1 = !active1"> Open Dialog 1 </si-button>
	<si-dialog v-model="active1">
		<template #header>
			<h3>Nested dialogs</h3>
		</template>
		<div class="con-content">
			<si-button @click="active2 = !active2"> Open Dialog 2 </si-button>
		</div>
	</si-dialog>

	<si-dialog v-model="active2" style="width: 20em">
		<template #header> Welcome to <b>Vuesax</b> </template>

		<si-input placeholder="Email" style="width: 100%">
			<template #prefix> @ </template>
		</si-input>
		<si-input input-type="password" placeholder="Password" style="width: 100%; margin-top: 1em">
			<template #prefix>
				<i class="bx bxs-lock"></i>
			</template>
		</si-input>
		<div style="text-align: left; margin-top: 1em">
			<si-checkbox>Remember me</si-checkbox>
			<a href="#">Forgot Password?</a>
		</div>

		<template #footer>
			<si-button block> Sign In </si-button>

			<div style="margin-top: 2em; font-size: 12px">New Here? <a href="#">Create New Account</a></div>
		</template>
	</si-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			active1: false,
			active2: false
		}
	}
})
</script>
