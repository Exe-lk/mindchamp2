import React, { useState, useEffect } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import DimensionsProvider from '../DimensionsProvider';
import SoundfontProvider from '../SoundfontProvider';


export default function ResponsivePiano(props) {

    // webkitAudioContext fallback needed to support Safari
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

    // Piano keyboad note range
    const noteRange = {
        first: MidiNumbers.fromNote('E2'),
        last: MidiNumbers.fromNote('F4'),
        _9th: MidiNumbers.fromNote('C3'),
        _13th: MidiNumbers.fromNote('B3')
    };

    // Piano keyboard shortcuts
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: noteRange._9th,
        lastNote: noteRange._13th,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    const passStopNote = (midiNumber) =>{

        props.onData(midiNumber);

    }

    return (
        <DimensionsProvider >
            {({ containerWidth, containerHeight }) => (
                <SoundfontProvider
                    instrumentName="acoustic_grand_piano"
                    audioContext={audioContext}
                    hostname={soundfontHostname}
                    render={({ isLoading, playNote, stopNote }) => (

                        <Piano

                            noteRange={noteRange}
                            width={containerWidth}
                            playNote={(midiNumber) => {
                                // console.log('playNote:', midiNumber);
                                playNote(midiNumber);
                                
                            }}

                            stopNote={(midiNumber) => {
                                // console.log("stopNote: ", midiNumber);
                                passStopNote(midiNumber);
                            }}

                            disabled={isLoading}
                            keyWidthToHeight={0.25}


                            {...props}

                        />
                    )}
                />
            )}
        </DimensionsProvider>
    );

}





function ResponsivePianoA(props) {

    // webkitAudioContext fallback needed to support Safari
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

    // Piano keyboad note range
    const noteRange = {
        first: MidiNumbers.fromNote('E2'),
        last: MidiNumbers.fromNote('F4'),
        _9th: MidiNumbers.fromNote('C3'),
        _13th: MidiNumbers.fromNote('B3')
    };

    // Piano keyboard shortcuts
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: noteRange._9th,
        lastNote: noteRange._13th,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    const passStopNote = (midiNumber) =>{

        props.onData(midiNumber);

    }

    return (
        <DimensionsProvider >
            {({ containerWidth, containerHeight }) => (
                <SoundfontProvider
                    instrumentName="acoustic_grand_piano"
                    audioContext={audioContext}
                    hostname={soundfontHostname}
                    render={({ isLoading, playNote, stopNote }) => (

                        <Piano

                            noteRange={noteRange}
                            width={containerWidth}
                            playNote={(midiNumber) => {
                                // console.log('playNote:', midiNumber);
                                playNote(midiNumber);
                                
                            }}

                            stopNote={(midiNumber) => {
                                // console.log("stopNote: ", midiNumber);
                                passStopNote(midiNumber);
                            }}

                            disabled={isLoading}
                            keyboardShortcuts={props.keyboardShortcuts}
                            keyWidthToHeight={0.25}

                            {...props}

                        />
                    )}
                />
            )}
        </DimensionsProvider>
    );

}