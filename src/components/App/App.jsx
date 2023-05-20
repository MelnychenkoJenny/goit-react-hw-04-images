import { Searchbar } from 'components/Searchbar';
import { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ImageGallery } from 'components/ImageGallery';
import { ButtonMore, Container } from 'components/ImageGallery/ImageGallery.styled';

import { Loader } from 'components/Loader';

import { fetchImages } from 'components/services/pixabayApi';
import { EmptyNotification } from 'components/EmptyNotification';

export class App extends Component {
  state = {
    error: null,
    images: [],
    page: 1,
    imageName: '',
    total: 1,
    loading: false,
    empty: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, images, imageName } = this.state;
    if (prevState.imageName !== imageName || prevState.page !== page) {
      this.getImages(imageName, page);
    }
    if (images.length > 12 && prevState.images !== images) {
      const { height: cardHeight } = document
        .querySelector('ul')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  }

  handleImageNameChange = imageName => {
    this.setState({
      imageName,
      images: [],
      page: 1,
      total: 1,
      loading: false,
      empty: false,
      error: null,
    });
  };

  getImages = async (imgName, page) => {
    try {
      this.setState({ loading: true });
      const responseImages = await fetchImages(imgName, page);

      if (!responseImages.hits.length) {
        toast.error(
          `Sorry, there are no images matching your query: "${imgName}". Please try to search something else.`
        );
        return this.setState({ empty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...responseImages.hits],
        page: prevState.page,
        total: responseImages.total,
        empty: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  loadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { error, loading, empty, total, page } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleImageNameChange} />
        <ImageGallery images={this.state.images} />
        {error && <h2>Something went wrong: ({error})!</h2>}
        {loading && <Loader />}
        {empty && <EmptyNotification />}
        {total / 12 > page && (
          <ButtonMore type="button" onClick={this.loadMoreBtn}>
            Load more
          </ButtonMore>
        )}
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}
