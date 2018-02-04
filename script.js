var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: './img/hp.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: './img/lion.jpg'
    },
    {
        id: 3,
        title: 'Leon zawodowiec',
        desc: 'Film o płatnym mordercy',
        img: './img/leon.jpg'
    },
    {
        id: 4,
        title: 'Miś',
        desc: 'Film z czasów PRL',
        img: './img/mis.jpg'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.img
        })
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));