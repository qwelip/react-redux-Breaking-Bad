export const caractersSelector = (state, filter) => {
  let episodesStr = filter.episodes.sort((a,b) => a - b).join('');

  return state.caracters.caracters.filter( caracter => {

    return (filter.status !== 'All' ? caracter.status === filter.status : true) && 
            caracter.name.toLowerCase().includes(filter.input.toLowerCase()) &&
            (episodesStr ? caracter.appearance.join('') === episodesStr : true)
  })
};

export const caractersInfoSelector = (state => ({
  loading: state.caracters.loading,
  qty: state.caracters.caracters.length
}))