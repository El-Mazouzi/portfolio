import { Show, createSignal } from 'solid-js'
import { Portal } from 'solid-js/web'
import GallerySlider from './gallery-slider'

import '~/styles/projects.css'

export default function GalleryButton(props: { project: any }) {
	const [showGallerySlider, setShowGallerySlider] = createSignal(false)

	return (
		<section class='projects section' id='projects'>
			<div
				// aria-label='open gallery slider'
				class='card-clickable'
				onClick={() => setShowGallerySlider(true)}
			></div>

			<Show when={showGallerySlider()}>
				<Portal>
					<GallerySlider
						project={props.project}
						closeGallerySlider={() => setShowGallerySlider(false)}
					/>
				</Portal>
			</Show>
		</section>
	)
}
