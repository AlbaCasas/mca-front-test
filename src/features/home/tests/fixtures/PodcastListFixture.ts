import { faker } from '@faker-js/faker';
import { PodcastDTO, PodcastListDTO } from '@features/home/api/dtos/PodcastListDTO';

const getAPodcast: () => PodcastDTO = () => ({
  title: {
    label: faker.music.songName()
  },
  'im:image': [
    {
      label: faker.internet.url(),
      attributes: {
        height: faker.string.numeric()
      }
    }
  ],
  'im:artist': {
    label: faker.person.firstName(),
    attributes: {
      href: faker.internet.url()
    }
  },
  id: {
    label: faker.string.uuid(),
    attributes: {
      'im:id': faker.string.uuid()
    }
  },
  summary: {
    label: faker.lorem.lines(2)
  }
});

export const aPodcastListWithTwoPodcasts: PodcastListDTO = {
  feed: {
    entry: [getAPodcast(), getAPodcast()]
  }
};

export const aPodcastList: PodcastListDTO = {
  feed: {
    entry: [getAPodcast()]
  }
};
