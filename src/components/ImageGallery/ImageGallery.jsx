import { ImageGalleryItem } from 'components/ImageGalleryItem';
import {
  Container,
  GalleryList,
} from './ImageGallery.styled';

export const ImageGallery = ({images}) => {

    return (
      <Container>
        <GalleryList>
          {images.map(img => (
            <ImageGalleryItem image={img} key={img.id} />
          ))}
        </GalleryList>   
      </Container>
    );

}

  // state = {
  //   error: null,
  //   images: [],
  //   page: 1,
  //   imageName: '',
  //   total: 1,
  //   loading: false,
  //   empty: false,
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const { imageName } = this.props;
  //   const { page, images } = this.state;
  //   if (prevProps.imageName !== imageName || prevState.page !== page) {
  //     this.getImages(imageName, page);
  //   }
  //   if (images.length > 12 && prevState.images !== images) {
  //     const { height: cardHeight } = document
  //       .querySelector('ul')
  //       .firstElementChild.getBoundingClientRect();

  //     window.scrollBy({
  //       top: cardHeight * 2,
  //       behavior: 'smooth',
  //     });
  //   }
  // }

  // getImages = async (imgName, page) => {
  //   const { imageName } = this.state;
  //   try {
  //     if (imgName !== imageName) {
  //       this.setState({ loading: true });
  //       const responseImages = await fetchImages(imgName, page);

  //       if (!responseImages.hits.length) {
  //         toast.error(
  //           `Sorry, there are no images matching your query: "${imgName}". Please try to search something else.`
  //         );
  //         return this.setState({
  //           images: [],
  //           page: 1,
  //           total: 1,
  //           loading: false,
  //           error: null,
  //           empty: true,
  //           imageName: '',
  //         });
  //       }
  //       return this.setState(prevState => ({
  //         images: responseImages.hits,
  //         page: prevState.page,
  //         total: responseImages.total,
  //         imageName: imgName,
  //         empty: false,
  //       }));
  //     }
  //     if (imgName === imageName) {
  //       this.setState({ loading: true });
  //       const nextImages = await fetchImages(imageName, this.state.page);
  //       return this.setState(prevState => ({
  //         images: [...prevState.images, ...nextImages.hits],
  //         page: prevState.page,
  //       }));
  //     }
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // };

  // loadMoreBtn = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

