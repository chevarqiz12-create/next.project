import FavoritesEmpty from "@/app/profile/favorites/FavoritesEmpty";

export default function FavoritesList() {
  return (
    <div className="py-2">
      <h2 className="text-2xl">Мои избранные</h2>
      <FavoritesEmpty />
    </div>
  )
}