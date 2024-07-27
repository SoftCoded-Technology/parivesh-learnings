import useData from "./useData";

const useGames = (selectedGenre, selectedPlatForm, sortOrders, searchText) => {
  const genreId = selectedGenre?.id || null;
  const platFormId = selectedPlatForm?.id || null;
  
  // console.log("in useGames, selectedGenre id:", selectedGenre?.id);

  return useData(
    "/games",
    { genres: genreId,platforms: platFormId,ordering: sortOrders,search: searchText },
    [genreId,platFormId,sortOrders,searchText],
  );
};

export default useGames;
