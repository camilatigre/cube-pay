// eslint-disable-next-line react/prop-types
const PermissionWrapper = ({ hasPermission = false, children }) => {
    if(!hasPermission) {
        return 'Page 404'
    }

    if(hasPermission) {
        return children
    } 
}

export default PermissionWrapper;