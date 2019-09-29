import { ADD_ARTICLE } from '../actions/types';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Arcu felis bibendum ut tristique et egestas. Nisl pretium fusce id velit ut tortor pretium viverra. Maecenas pharetra convallis posuere morbi leo urna. Fermentum leo vel orci porta non pulvinar neque laoreet. Amet mauris commodo quis imperdiet massa tincidunt. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Quis viverra nibh cras pulvinar mattis.\n' +
  '\n' +
  'Enim nec dui nunc mattis enim ut tellus. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Fringilla ut morbi tincidunt augue. Leo in vitae turpis massa sed elementum tempus egestas sed. Diam quis enim lobortis scelerisque. Nibh tellus molestie nunc non. Consectetur purus ut faucibus pulvinar elementum integer enim. Tortor id aliquet lectus proin nibh nisl condimentum id. Ut tellus elementum sagittis vitae et leo duis. Pellentesque diam volutpat commodo sed egestas egestas. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Et molestie ac feugiat sed lectus vestibulum mattis.\n' +
  '\n' +
  'Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis tellus id interdum velit laoreet id. Non arcu risus quis varius quam quisque id. Senectus et netus et malesuada fames. Eu augue ut lectus arcu bibendum at. Ullamcorper sit amet risus nullam eget. In hac habitasse platea dictumst quisque sagittis purus sit. Gravida cum sociis natoque penatibus et magnis dis parturient. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Ante metus dictum at tempor commodo ullamcorper. Tellus orci ac auctor augue mauris augue. Elementum integer enim neque volutpat. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Sed vulputate mi sit amet mauris commodo quis imperdiet. Enim eu turpis egestas pretium aenean pharetra.\n' +
  '\n' +
  'Amet mattis vulputate enim nulla aliquet porttitor. Ligula ullamcorper malesuada proin libero. Sit amet nulla facilisi morbi tempus iaculis urna. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Et ultrices neque ornare aenean euismod elementum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Aenean sed adipiscing diam donec. Volutpat ac tincidunt vitae semper. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Nullam vehicula ipsum a arcu. Lectus arcu bibendum at varius vel pharetra. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Eget nunc lobortis mattis aliquam faucibus purus in.\n' +
  '\n' +
  'Posuere ac ut consequat semper. Facilisis sed odio morbi quis commodo odio. Risus quis varius quam quisque id. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Non arcu risus quis varius. Urna molestie at elementum eu facilisis sed odio morbi. Mollis aliquam ut porttitor leo a. At elementum eu facilisis sed odio morbi quis commodo. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ipsum dolor sit amet consectetur adipiscing elit duis tristique.';
const newsInitial = {
  news: [
    {
      id: 1,
      title: 'Renovations to Roads',
      description:
        'Many Roads around the community are about to get renovated.',
      text: lorem
    },
    {
      id: 2,
      title: 'Broken Mailboxes',
      description: 'A large number of broken mailboxes have appeared.',
      text: lorem
    },
    {
      id: 3,
      title: 'Community Get-Together 11/1',
      description:
        'Hampton Roads is hosting an event on the first of november. Be There!',
      text: lorem
    }
  ]
};

let id = 4;

export default function(state = newsInitial, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      action.payload.id = id++;
      return { ...state, news: [...state.news, action.payload] };
    default:
      return state;
  }
}
