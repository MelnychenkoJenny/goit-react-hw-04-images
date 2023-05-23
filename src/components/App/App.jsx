import { Searchbar } from 'components/Searchbar';
import { toast, ToastContainer } from 'react-toastify';
import { ImageGallery } from 'components/ImageGallery';
import { Container } from 'components/App/App.styled';
import { Loader } from 'components/Loader';
import { fetchImages } from 'components/services/pixabayApi';
import { EmptyNotification } from 'components/EmptyNotification';
import { useState, useEffect } from 'react';
import { ButtonMore, ButtonUp } from 'components/Button/Button.styled';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Error } from 'components/Error';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (images.length > 12) {
      const { height: cardHeight } = document
        .querySelector('ul')
        .firstElementChild.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 4,
        behavior: 'smooth',
      });
    }
  });

  useEffect(() => {
    getImages();
    async function getImages() {
      try {
        setLoading(true);
        const responseImages = await fetchImages('', 1);
        setImages([...responseImages.hits]);
        setTotal(responseImages.total);
        setEmpty(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (searchQuery) getImages();
    async function getImages() {
      try {
        setShowButton(true);
        setLoading(true);
        const responseImages = await fetchImages(searchQuery, page);

        if (!responseImages.hits.length) {
          toast.error(
            `Sorry, there are no images matching your query: "${searchQuery}". Please try to search something else.`
          );
          return setEmpty(true);
        }
        setImages(prevImages => [...prevImages, ...responseImages.hits]);
        setTotal(responseImages.total);
        setEmpty(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, [page, searchQuery]);

  const handleImageNameChange = imageName => {
    if (searchQuery === imageName) {
      toast.error(
        `Images for this request have already been shown. Try another one.`
      );
      return;
    }
    setSearchQuery(imageName);
    setImages([]);
    setPage(1);
    setTotal(1);
    setLoading(false);
    setEmpty(false);
    setError(null);
  };
  const loadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Container>
      <Searchbar onSubmit={handleImageNameChange} />
      <ImageGallery images={images} />
      {error && <Error error={error} />}
      {loading && <Loader />}
      {empty && <EmptyNotification />}
      {total / 12 > page && !loading && showButton && (
        <ButtonMore type="button" onClick={loadMoreBtn}>
          Load more
        </ButtonMore>
      )}
      {images.length >= 12 && !loading && showButton && (
        <ButtonUp type="button" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </ButtonUp>
      )}

      <ToastContainer autoClose={2000} />
    </Container>
  );
};
