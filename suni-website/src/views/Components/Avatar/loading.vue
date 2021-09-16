<template>
	<si-avatar src="/avatars/five.jpg" loading badge></si-avatar>
	<si-avatar src="/avatars/five.jpg" loading badge badge-type="danger"></si-avatar>
	<si-avatar src="/avatars/five.jpg" loading badge badge-type="success">
		<template #badge> 28 </template>
	</si-avatar>
	<si-avatar src="/avatars/five.jpg" loading badge badge-type="warning">
		<template #badge>
			<i class="bx bxs-bell-off"></i>
		</template>
	</si-avatar>
	<si-avatar src="/avatars/five.jpg" loading writing badge badge-type="primary"></si-avatar>
	<si-avatar src="/avatars/five.jpg" loading badge-position="bottom-right" badge badge-color="#7d33ff"></si-avatar>
</template>
