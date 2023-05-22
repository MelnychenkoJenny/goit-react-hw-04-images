import { Searchbar } from 'components/Searchbar';
import { toast, ToastContainer } from 'react-toastify';
import { ImageGallery } from 'components/ImageGallery';
import { ButtonMore, Container} from 'components/ImageGallery/ImageGallery.styled';
import { Loader } from 'components/Loader';
import { fetchImages } from 'components/services/pixabayApi';
import { EmptyNotification } from 'components/EmptyNotification';
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(null);

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
    if (searchQuery) getImages();
    async function getImages() {
      try {
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
  }, [searchQuery, page]);

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

  return (
    <Container>
      <Searchbar onSubmit={handleImageNameChange} />
      <ImageGallery images={images} />
      {error && <h2>Something went wrong: ({error})!</h2>}
      {loading && <Loader />}
      {empty && <EmptyNotification />}
      {total / 12 > page && !loading && (
        <ButtonMore type="button" onClick={loadMoreBtn}>
          Load more
        </ButtonMore>
      )}
      <ToastContainer autoClose={2000} />
    </Container>
  );
};