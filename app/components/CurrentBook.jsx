const React = require('react');
import { Link } from 'react-router';

const CurrentBook = (props) => {
  return (
    <div className="col-sm-6 currentColumn">
      <div className="row">
        <div className="col-xs-12 currentHeader">
            Currently Reading
        </div>
      </div>
        <div className="row">
            <div className="col-xs-4 currentPhotoColumn">
                <Link to={`/books/${props.currentBook._id}`}>
                  <img src={props.currentBook.coverPath}className="img-responsive bookPhoto"/>
                </Link>
            </div>
            <div className="col-xs-8 currentInfoColumn">
                <div className="row">
                  <div className="col-xs-12 currentTitle">
                    <Link to={`/books/${props.currentBook._id}`}>
                      {props.currentBook.title}
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 currentAuthor">
                    <Link to={`/authors/${props.currentAuthor}`} >
                    {props.currentBook.author}
                    </Link>
                   
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 currentBio">
                    {`${props.currentBook.summary.substr(0, 500)}...`}
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

// defaults
CurrentBook.defaultProps = {
  currentBook: {
    title: 'Can\'t find your gosh-darned book!',
    author: 'Who the heck knows?',
    summary: 'Try making a different book yr current book, doofus'
  }
}

module.exports = CurrentBook;
