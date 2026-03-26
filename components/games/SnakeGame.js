'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GRID_SIZE = 20;
const CELL_SIZE = 20;

export function SnakeGame({ onClose }) {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [nextDirection, setNextDirection] = useState({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const gameLoopRef = useRef(null);

  // Generate random food position
  const generateFood = () => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          if (direction.y === 0) setNextDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (direction.y === 0) setNextDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (direction.x === 0) setNextDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (direction.x === 0) setNextDirection({ x: 1, y: 0 });
          break;
        case ' ':
          e.preventDefault();
          setIsPaused(!isPaused);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPaused]);

  // Game loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        setDirection(nextDirection);

        const head = prevSnake[0];
        const newHead = {
          x: (head.x + nextDirection.x + GRID_SIZE) % GRID_SIZE,
          y: (head.y + nextDirection.y + GRID_SIZE) % GRID_SIZE,
        };

        // Check collision with self
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 1);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoopRef.current);
  }, [nextDirection, food, gameOver, isPaused]);

  const handleReset = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 1, y: 0 });
    setNextDirection({ x: 1, y: 0 });
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full max-w-lg mx-auto p-6 bg-zinc-900 border border-violet-500/20 rounded-lg"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Snake Game</h2>
        <button
          onClick={onClose}
          className="text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Score */}
      <div className="text-center mb-4">
        <p className="text-sm text-zinc-400">Score</p>
        <p className="text-3xl font-bold text-violet-400">{score}</p>
      </div>

      {/* Game Board */}
      <div
        className="relative bg-zinc-950 border-2 border-violet-500/30 rounded-lg overflow-hidden mx-auto mb-6"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: GRID_SIZE }).map((_, y) =>
            Array.from({ length: GRID_SIZE }).map((_, x) => (
              <div
                key={`${x}-${y}`}
                className="absolute border border-zinc-800"
                style={{
                  left: x * CELL_SIZE,
                  top: y * CELL_SIZE,
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                }}
              />
            ))
          )}
        </div>

        {/* Snake */}
        {snake.map((segment, index) => (
          <motion.div
            key={index}
            className={`absolute rounded ${
              index === 0
                ? 'bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg shadow-violet-500/50'
                : 'bg-violet-500/80'
            }`}
            style={{
              left: segment.x * CELL_SIZE + 2,
              top: segment.y * CELL_SIZE + 2,
              width: CELL_SIZE - 4,
              height: CELL_SIZE - 4,
            }}
            animate={{ scale: index === 0 ? 1 : 0.95 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          />
        ))}

        {/* Food */}
        <motion.div
          className="absolute bg-gradient-to-r from-amber-300 to-orange-400 rounded-full shadow-lg shadow-amber-500/50"
          style={{
            left: food.x * CELL_SIZE + 4,
            top: food.y * CELL_SIZE + 4,
            width: CELL_SIZE - 8,
            height: CELL_SIZE - 8,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center backdrop-blur-sm"
          >
            <p className="text-2xl font-bold text-white mb-2">Game Over!</p>
            <p className="text-violet-400 mb-6">Final Score: {score}</p>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
            >
              Play Again
            </button>
          </motion.div>
        )}

        {/* Paused Overlay */}
        {isPaused && !gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm"
          >
            <p className="text-2xl font-bold text-white">PAUSED</p>
          </motion.div>
        )}
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-2">
          <div className="grid grid-cols-3 gap-2">
            <div />
            <button
              onClick={() => {
                if (direction.y === 0) setNextDirection({ x: 0, y: -1 });
              }}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
            >
              ↑
            </button>
            <div />
            <button
              onClick={() => {
                if (direction.x === 0) setNextDirection({ x: -1, y: 0 });
              }}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => {
                if (direction.y === 0) setNextDirection({ x: 0, y: 1 });
              }}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
            >
              ↓
            </button>
            <button
              onClick={() => {
                if (direction.x === 0) setNextDirection({ x: 1, y: 0 });
              }}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setIsPaused(!isPaused)}
            disabled={gameOver}
            className="flex-1 px-4 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-zinc-700 disabled:text-zinc-500 text-white rounded-lg transition-colors"
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>

        <p className="text-center text-sm text-zinc-400">
          Use arrow keys or buttons to move. Press Space to pause.
        </p>
      </div>
    </motion.div>
  );
}
