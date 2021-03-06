import React, {Component} from 'react';
import styles from './loading.scope.scss';

class Loading extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div className={styles.container} style={{height: document.documentElement.clientHeight}}>
            <div className={styles.load}>
                <div className={styles.outer}>
                </div>
                <div className={styles.inner}>
                </div>
            </div>
        </div>
    }
}


export default Loading;