import React, {Component} from 'react';
import Books from './components/books';

const apikey = 'AIzaSyAOQfzgYD1Fq2EOXc3wXWO67tNzcKvk0Gce'
const isbn = '9780395647417'
const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + '?projection=lite&key=' + apikey;
class BookProp extends Component {
    render() {
        return (
            <BookProp  books={this.state.bookProp } />
        )
    }

    state = {
        books: []
    };

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ books: data })
            })
            .catch(console.log)
    }
}

export default BookProp;

