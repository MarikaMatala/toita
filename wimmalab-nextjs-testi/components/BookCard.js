import Image from 'next/image';

import Button from '/components/Button';

const BookCard = ({ href, img, title, children }) => {
  return (
    <div className="book__container">
      <div className="book__img-container">
        <Image src={img} alt={title} width={150} height={175} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
        <Button href={href} type="secondary" icon>
          Read Guide
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
