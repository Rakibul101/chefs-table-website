import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 ml-4 ">
            <div className="border border-gray-300 rounded-lg p-4">
                <h2 className="text-center text-2xl font-semibold">Want to cook: {bookmarks.length}</h2>
                <hr className='border-gray-300 border-1 my-4' />
                <table>
                    <tr>
                        <th className="pl-4">Name</th>
                        <th className="pl-16">Time</th>
                        <th className="pl-8">Calories</th>
                    </tr>
                </table>
                {
                    bookmarks.map(bookmark=><Bookmark key={bookmark.recipe_id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;