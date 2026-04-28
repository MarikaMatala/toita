import Image from 'next/image';

const HistoryCard = ({ url, imgUrl, isSvg = false, title, desc }) => {
  return (
    <a className="history-card" href={url} target="_blank" rel="noreferrer noopener">
      <div className="history-card__image">
        {isSvg ? imgUrl : <Image src={imgUrl} alt={title} width={100} height={100} />}
      </div>
      <div>
        <h4>{title}</h4>
        <p className="history-card__p">{desc}</p>
      </div>
    </a>
  );
};

export default HistoryCard;
