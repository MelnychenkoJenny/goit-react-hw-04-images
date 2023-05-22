import EmptyImg from '../images/empty.png';
import { EmptyImage, EmptyText, Empty } from './EmptyNotification.styled';

export const EmptyNotification = () => {
  return (
    <Empty>
      <EmptyText>
        Sorry, there are no images matching your query. Please try to search
        something else... 🙄
      </EmptyText>
      <EmptyImage src={EmptyImg} alt="emptyImageCat" />
    </Empty>
  );
};
