import styles from './Member.module.scss'
import classNames from 'classnames/bind';
import MemberList from './component/MemberList';
import MemberProfile from './component/MemberProfile';

const cx = classNames.bind(styles);

function Member() {
    return (
        <div>
            
            
            <MemberProfile />
        </div>
    );
}

export default Member;