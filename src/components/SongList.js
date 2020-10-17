import React from 'react';
import {connect} from 'react-redux';
import {selectedSong} from '../actions';

const SongList = (props) => {
   
    function renderList() {
        return props.songs.map((song)=> {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => props.selectedSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>

                </div>
            );
        })
    }
    return (
        <div className="ui divided list">{renderList()}</div>
    )
}

const mapStateToProps = (state) => {
    
    return {songs : state.songs};

}

export default connect(mapStateToProps, {
    selectedSong
})(SongList);