export default function ProjectPicture({imagePath, className}) {
  return (
    <div className={`${className} p-12 bg-gray-50 dark:bg-gray-700 flex justify-center items-center`}>
        <img src={imagePath} alt="" />
    </div>
  )
}
