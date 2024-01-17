import { useState } from 'react';

import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
}

function OfferList({ offers }: OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);

  const handleMouseMove = (id: number) => setActiveOfferId(id);
  const handleMouseLeave = () => setActiveOfferId(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
