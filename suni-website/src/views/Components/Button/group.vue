<template>
	<p>
		<si-button-group>
			<si-button variant="relief"> <i class="bx bx-home-alt"></i> Home </si-button>
			<si-button variant="relief"> <i class="bx bxs-phone-call"></i> Contact </si-button>
			<si-button variant="relief" loading> <i class="bx bxs-cart-alt"></i> Products </si-button>
			<si-button variant="relief" upload> <i class="bx bxs-envelope"></i> Send </si-button>
		</si-button-group>
	</p>

	<p style="margin-top: 1em">
		<si-button-group>
			<si-button variant="flat" icon>
				<i class="bx bx-play"></i>
			</si-button>
			<si-button variant="flat" icon>
				<i class="bx bx-pause"></i>
			</si-button>
			<si-button variant="flat" icon>
				<i class="bx bx-fast-forward"></i>
			</si-button>
			<si-button variant="flat" icon>
				<i class="bx bx-shuffle"></i>
			</si-button>
		</si-button-group>

		<span style="margin: 0 1em" />

		<si-button-group>
			<si-button variant="border" type="dark">
				<i class="bx bxs-pencil"></i>
				Edit
			</si-button>
			<si-button variant="border" type="dark">
				<i class="bx bx-font-color"></i>
			</si-button>
			<si-button variant="border" type="dark">
				<i class="bx bx-align-middle"></i>
			</si-button>
			<si-button variant="border" type="dark">
				<i class="bx bx-bold"></i>
			</si-button>
			<si-button variant="border" type="dark">
				<i class="bx bx-font-size"></i>
				Font size
			</si-button>
		</si-button-group>
	</p>
</template>
