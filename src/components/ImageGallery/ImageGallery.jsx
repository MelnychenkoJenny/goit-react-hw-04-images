import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Container, GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <Container>
      <GalleryList>
        {images.map(img => (
          <ImageGalleryItem image={img} key={img.id} />
        ))}
      </GalleryList>
    </Container>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
};
