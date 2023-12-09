fun sumOf(series: List<Int>): Int {
  return series.reduce { acc, i -> acc + i}
}

fun areAllZero(series: List<Int>): Boolean = series.all { it == 0 }