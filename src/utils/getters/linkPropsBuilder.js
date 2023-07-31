import routes from 'routes';
import paths from 'paths';
import jsonToQueryString from 'utils/getters/jsonToQueryString';

export function buildCourseLink(category,id) {
    return {
        href: `${paths.PATH_COURSE_SINGLE}${jsonToQueryString({ id })}`,
        as: routes.ROUTE_COURSE_SINGLE.replace(':category',category).replace(':id', id),
        prefetch: false,
    };
}
