'use strict';
import { connect } from 'react-redux';

import Show from '../components/showView';
import {getUserDetail} from '../actions/users';

const mapStateToProps = (state) => {
	return {
		user_show: state.users.user_show
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getUserDetail: (id) => (dispatch(getUserDetail(id)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Show);
