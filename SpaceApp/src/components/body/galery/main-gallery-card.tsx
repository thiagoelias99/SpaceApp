import { Foto } from '../../../App'

interface MainGalleryCardProps {
    foto: Foto
}

export default function MainGalleryCard({ foto }: MainGalleryCardProps) {
    return (
        <figure>
            <img />
            <figcaption>
                <h3>
                    <footer>
                        <p>fonte</p>
                        <button>favoritar</button>
                        <button>maximizar</button>
                    </footer>
                </h3>
            </figcaption>
        </figure>
    )
}