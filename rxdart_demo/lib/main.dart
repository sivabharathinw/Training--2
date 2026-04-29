import 'dart:async';
import 'package:rxdart/rxdart.dart';

void main() async {

  print("\nmap");
  await Stream.fromIterable([1, 2, 3])
      .map((x) => x * 10)
      .forEach(print);

  print("\nfilter");
  await Stream.fromIterable([2, 30, 22, 5, 60, 1])
      .where((x) => x > 10)
      .forEach(print);

  print("\nflatMap");
  await Stream.fromIterable([1, 2, 3])
      .flatMap((x) => Stream.fromIterable([x, x * 10]))
      .forEach(print);

  print("\nconcat");
  await Rx.concat([
    Stream.fromIterable([1, 1, 1]),
    Stream.fromIterable([2, 2]),
  ]).forEach(print);

  // print("\nconcatMap example");
  // await Stream.fromIterable([1, 2, 3])
  //     .asyncExpand((x) => Stream.fromIterable([x, x * 10]))
  //     .forEach(print);

  print("\ncombineLatest");
  await Rx.combineLatest2(
    Stream.fromIterable([1, 2, 3]),
    Stream.fromIterable(['A', 'B', 'C']),
        (a, b) => "$a$b",
  ).forEach(print);

  print("\nzip");
  await Rx.zip2(
    Stream.fromIterable([1, 2, 3]),
    Stream.fromIterable(['A', 'B', 'C']),
        (a, b) => "$a$b",
  ).forEach(print);

  print("\nscan");
  await Stream.fromIterable([1, 2, 3, 4, 5])
      .scan((acc, value, index) => acc + value, 0)
      .forEach(print);

  print("\nreduce");
  final sum = await Stream.fromIterable([1, 2, 3, 4, 5])
      .reduce((a, b) => a + b);
  print(sum);


  print("\ndebounce");

  final controller = StreamController<int>();

  final debounceSubscription = controller.stream
      .debounceTime(const Duration(milliseconds: 300))
      .listen((value) {
    print("Debounced: $value");
  });

  controller.add(1);
  controller.add(2);
  controller.add(3);

  await Future.delayed(const Duration(milliseconds: 500));

  controller.add(4);

  await Future.delayed(const Duration(milliseconds: 500));

  await controller.close();
  await debounceSubscription.cancel();

  print("\ntakeuntil");

  final stream1 = Stream.periodic(
    const Duration(seconds: 1),
        (x) => x + 1,
  );

  final stopStream = Stream.fromFuture(
    Future.delayed(const Duration(seconds: 5)),
  );

  final sub = stream1.takeUntil(stopStream).listen((value) {
    print("Stream1: $value");
  });

  await Future.delayed(const Duration(seconds: 7));
  await sub.cancel();

  print("\ndistinct");
  await Stream.fromIterable([1, 2, 2, 1, 3])
      .distinct()
      .forEach(print);

  print("\ndistinctUntilChanged");
  await Stream.fromIterable([1, 2, 2, 1, 3])
      .distinctUnique()
      .forEach(print);

  print("\ndefaultIfEmpty");
  await Stream.empty()
      .defaultIfEmpty(100)
      .forEach(print);
}