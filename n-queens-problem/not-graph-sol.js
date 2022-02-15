(() => {
  "use strict";

  // N QUEENS PROBLEM -----------------------------------

  // queenPuzzle :: Int -> Int -> [[Int]]
  const queenPuzzle = intRows => intCols => {
    const go = nRows =>
      nRows <= 0
        ? [[]]
        : go(nRows - 1).reduce(
            (a, solution) =>
              append(a)(
                enumFromTo(0)(intCols - 1).reduce(
                  (b, iCol) =>
                    safe(nRows - 1, iCol, solution)
                      ? b.concat([solution.concat(iCol)])
                      : b,
                  []
                )
              ),
            []
          );
    return go(intRows);
  };

  // safe : Int -> Int -> [Int] -> Bool
  const safe = (iRow, iCol, solution) =>
    !any(
      ([sc, sr]) =>
        iCol === sc || sc + sr === iCol + iRow || sc - sr === iCol - iRow
    )(zip(solution)(enumFromTo(0)(iRow - 1)));

  // TEST -----------------------------------------------
  // Ten columns of solutions to the 7*7 board

  // main :: IO ()
  const main = () => console.log(showSolutions(4, 10));

  // DISPLAY ---------------------------------------------

  // showSolutions :: Int -> Int -> String
  const showSolutions = (nCols, nBoardSize) =>
    intercalate("\n\n")(
      map(unlines)(
        map(
          compose(
            map(intercalate("  ")),
            transpose,
            map(rows =>
              map(r =>
                concat(
                  concatMap(compose(bool(".")("♛"), eq(r)))(
                    enumFromTo(1)(rows.length)
                  )
                )
              )(rows)
            )
          )
        )(chunksOf(nCols)(join(queenPuzzle)(nBoardSize)))
      )
    );

  // GENERIC FUNCTIONS ----------------------------------

  // abs :: Num a => a -> a
  const abs = Math.abs;

  // bool :: a -> a -> Bool -> a
  const bool = f => t => p => (p ? t : f);

  // eq (==) :: Eq a => a -> a -> Bool
  const eq = a => b => a === b;

  // any :: (a -> Bool) -> [a] -> Bool
  const any = p => xs => xs.some(p);

  // (++) :: [a] -> [a] -> [a]
  const append = xs => ys => xs.concat(ys);

  // bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
  const bindFn = f => bop =>
    // Binary operator applied over f x and x.
    x => bop(f(x))(x);

  // chunksOf :: Int -> [a] -> [[a]]
  const chunksOf = n => xs =>
    xs.reduce(
      (a, _, i, xs) => (i % n ? a : a.concat([xs.slice(i, i + n)])),
      []
    );

  // compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
  const compose = (...fs) => x => fs.reduceRight((a, f) => f(a), x);

  // concat :: [[a]] -> [a]
  // concat :: [String] -> String
  const concat = xs =>
    0 < xs.length
      ? (() => {
          const unit = "string" !== typeof xs[0] ? [] : "";
          return unit.concat.apply(unit, xs);
        })()
      : [];

  // concatMap :: (a -> [b]) -> [a] -> [b]
  const concatMap = f => xs => xs.flatMap(f);

  // enumFromTo :: Int -> Int -> [Int]
  const enumFromTo = m => n =>
    Array.from(
      {
        length: Math.floor(n - m) + 1
      },
      (_, i) => m + i
    );

  // identity :: a -> a
  const identity = x => x;

  // intercalate :: String -> [a] -> String
  const intercalate = s => xs => xs.join(s);

  // join :: m (m a) -> m a
  // Function instance
  const join = f => bindFn(f)(identity);

  // map :: (a -> b) -> [a] -> [b]
  const map = f => xs => xs.map(f);

  // transpose :: [[a]] -> [[a]]
  const transpose = xs => xs[0].map((_, iCol) => xs.map(row => row[iCol]));

  // unlines :: [String] -> String
  const unlines = xs => xs.join("\n");

  // zip :: [a] -> [b] -> [(a,b)]
  const zip = xs => ys =>
    xs.slice(0, Math.min(xs.length, ys.length)).map((x, i) => [x, ys[i]]);

  // MAIN ---
  return main();
})();
