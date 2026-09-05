// World map dots — each entry is [x, y] on a 1000×500 viewBox
// These coordinates approximate a Mercator-projected world map rendered as a dot matrix.

export const worldMapDots = (() => {
  const dots = []

  // Helper to add a block of dots within a bounding box, filtered by a shape function
  function addRegion(xMin, xMax, yMin, yMax, step, shapeFn) {
    for (let x = xMin; x <= xMax; x += step) {
      for (let y = yMin; y <= yMax; y += step) {
        if (shapeFn(x, y)) {
          dots.push([x, y])
        }
      }
    }
  }

  const S = 10 // dot spacing

  // ── North America ──
  // Canada
  addRegion(60, 280, 40, 100, S, (x, y) => {
    if (x < 80 && y < 60) return false // cut top-left corner
    if (x > 260 && y < 50) return false
    if (x > 250 && y > 90) return false
    return true
  })
  // USA
  addRegion(70, 250, 100, 170, S, (x, y) => {
    if (x < 90 && y > 150) return false
    if (x > 240 && y > 140) return false
    return true
  })
  // Mexico & Central America
  addRegion(90, 200, 170, 220, S, (x, y) => {
    if (x > 170 && y > 200) return false
    if (x > 190 && y > 190) return false
    return true
  })
  // Alaska
  addRegion(30, 80, 40, 80, S, (x, y) => {
    if (x < 40 && y > 70) return false
    return true
  })
  // Greenland
  addRegion(280, 340, 25, 80, S, (x, y) => {
    if (x > 330 && y > 60) return false
    if (x < 290 && y < 35) return false
    return true
  })

  // ── South America ──
  addRegion(160, 270, 240, 440, S, (x, y) => {
    // Northern part wider
    if (y < 280) {
      return x >= 160 && x <= 270
    }
    // Narrowing towards south
    if (y < 340) {
      return x >= 170 && x <= 260
    }
    if (y < 380) {
      return x >= 180 && x <= 250
    }
    if (y < 410) {
      return x >= 190 && x <= 240
    }
    // Tip
    return x >= 200 && x <= 230
  })

  // ── Europe ──
  addRegion(390, 490, 40, 130, S, (x, y) => {
    if (y < 50 && x > 470) return false // Scandinavia shape
    if (y < 60 && x < 400) return false
    if (y > 120 && x < 400) return false
    if (y > 110 && x > 480) return false
    return true
  })
  // UK/Ireland
  addRegion(370, 395, 55, 100, S, (x, y) => {
    if (y > 90 && x < 380) return false
    return true
  })
  // Scandinavia
  addRegion(430, 470, 25, 55, S, (x, y) => {
    return true
  })

  // ── Africa ──
  addRegion(370, 500, 140, 380, S, (x, y) => {
    // Northern Africa wider
    if (y < 180) {
      return x >= 370 && x <= 500
    }
    if (y < 220) {
      return x >= 380 && x <= 490
    }
    // West African bulge
    if (y < 250) {
      return x >= 370 && x <= 490
    }
    if (y < 300) {
      return x >= 390 && x <= 480
    }
    if (y < 340) {
      return x >= 400 && x <= 470
    }
    if (y < 360) {
      return x >= 410 && x <= 460
    }
    // Southern tip
    return x >= 420 && x <= 450
  })

  // ── Middle East ──
  addRegion(490, 570, 110, 190, S, (x, y) => {
    if (y < 130 && x > 550) return false
    if (y > 170 && x < 510) return false
    if (y > 180 && x > 560) return false
    return true
  })

  // ── Russia/Northern Asia ──
  addRegion(480, 780, 30, 100, S, (x, y) => {
    if (x > 750 && y > 80) return false
    if (x > 730 && y < 40) return false
    if (x < 500 && y > 80) return false
    return true
  })

  // ── Central/South Asia (India, etc.) ──
  addRegion(550, 650, 100, 240, S, (x, y) => {
    // India shape - wider at top, narrows to point
    if (y < 130) {
      return x >= 560 && x <= 640
    }
    if (y < 160) {
      return x >= 555 && x <= 645
    }
    if (y < 190) {
      return x >= 565 && x <= 635
    }
    if (y < 210) {
      return x >= 575 && x <= 625
    }
    if (y < 230) {
      return x >= 585 && x <= 615
    }
    return x >= 595 && x <= 605
  })

  // ── East Asia (China, Japan, Korea) ──
  addRegion(640, 770, 80, 190, S, (x, y) => {
    if (y < 100 && x > 750) return false
    if (y > 170 && x < 660) return false
    if (y > 160 && x > 760) return false
    return true
  })
  // Japan
  addRegion(770, 800, 90, 160, S, (x, y) => {
    return true
  })

  // ── Southeast Asia ──
  addRegion(650, 740, 190, 260, S, (x, y) => {
    if (x > 720 && y > 240) return false
    if (x < 660 && y > 240) return false
    return true
  })
  // Indonesia archipelago
  addRegion(670, 790, 260, 300, S, (x, y) => {
    // Scattered islands
    if (y > 280 && x < 690) return false
    if (y > 290 && x > 770) return false
    return (x % 20 < 15) // create gaps between "islands"
  })

  // ── Australia ──
  addRegion(730, 850, 300, 410, S, (x, y) => {
    if (y < 320) {
      return x >= 760 && x <= 840
    }
    if (y < 350) {
      return x >= 740 && x <= 850
    }
    if (y < 380) {
      return x >= 730 && x <= 845
    }
    if (y < 400) {
      return x >= 740 && x <= 835
    }
    return x >= 755 && x <= 820
  })
  // New Zealand
  addRegion(870, 890, 370, 420, S, (x, y) => {
    return true
  })

  return dots
})()
