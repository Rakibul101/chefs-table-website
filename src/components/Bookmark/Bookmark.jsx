import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {recipe_name, preparing_time, calories } = bookmark;
    return (
        <div className='flex bg-gray-300 p-1 m-4 rounded-lg'>
        <table>
            <tr>
                <td>{recipe_name}</td>
                <td className='pl-4'>{preparing_time}</td>
                <td className='pl-4'>{calories}</td>
            </tr>
        </table>
        <button  className="px-3 py-2 bg-[#0BE58A] rounded-xl">Preparing</button>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;