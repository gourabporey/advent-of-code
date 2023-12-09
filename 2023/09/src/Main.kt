import java.io.File

fun parseSeries(rawSeriesData: List<String>): List<List<Int>> {
  return rawSeriesData.map { it.split(" ").map { s -> s.toInt() } }
}

fun calculateCommonDifferences(series: List<Int>): List<Int> = series.zipWithNext { a, b -> b - a}

fun findPreviousValue(series: List<Int>): Int {
  if (areAllZero(series)) return 0
  val commonDifferences = calculateCommonDifferences(series)
  return series.first() - findPreviousValue(commonDifferences)
}

fun findNextValue(series: List<Int>): Int {
  if (areAllZero(series)) return 0
  val commonDifferences = calculateCommonDifferences(series)
  return series.last() + findNextValue(commonDifferences)
}

fun calculateSumOfNextValues(allSeries: List<List<Int>>): Int {
  val listOfLastValues: List<Int> = allSeries.map { findNextValue(it) }
  return sumOf(listOfLastValues)
}

fun calculateSumOfPreviousValues(allSeries: List<List<Int>>): Int {
  val listOfPreviousValues: List<Int> = allSeries.map { findPreviousValue(it) }
  return sumOf(listOfPreviousValues)
}

fun main() {
  val rawSeriesData = File("./09/data/input.txt")
    .readLines()
  val seriesData = parseSeries(rawSeriesData)

  val sumOfNextValues = calculateSumOfNextValues(seriesData)
  val sumOfPreviousValues = calculateSumOfPreviousValues(seriesData)

  println("Sum of next elements of the series: $sumOfNextValues")
  println("Sum of previous elements of the series: $sumOfPreviousValues")
}

