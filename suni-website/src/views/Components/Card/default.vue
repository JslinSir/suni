<template>
	<si-card style="margin: 0 auto">
		<template #title>
			<h3>Pot with a plant</h3>
		</template>
		<template #img>
			<img src="/photo/one.webp" />
		</template>
		<template #text>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
		</template>
		<template #interactions>
			<si-button type="danger" icon>
				<i class="bx bx-heart"></i>
			</si-button>
			<si-button variant="shadow" type="primary">
				<i class="bx bx-chat"></i>
				<span class="span"> 54 </span>
			</si-button>
		</template>
	</si-card>
</template>
