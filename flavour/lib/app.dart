import 'package:flutter/material.dart';
import 'config.dart';
import 'api_service.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final config = FlavorConfig.instance;

    return MaterialApp(
      title: config.appName,
      debugShowCheckedModeBanner: config.isDev,//if is it dev shows debug othws not show
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: config.primaryColor,
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final ApiService _apiService = ApiService();
  late Future<List<String>> _usersFuture;

  @override
  void initState() {
    super.initState();
    _usersFuture = _apiService.fetchUsers();
  }

  @override
  Widget build(BuildContext context) {
    final config = FlavorConfig.instance;

    return Scaffold(
      appBar: AppBar(
        title: Text(config.appName),
        backgroundColor: config.primaryColor,
        foregroundColor: Colors.white,
        actions: [
          if (config.isDev)
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: Chip(
                label: Text("DEBUG"),
                backgroundColor: Colors.orange,
              ),
            ),
        ],
      ),
      body: FutureBuilder<List<String>>(
        future: _usersFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Text(
                  "Error: ${snapshot.error}",
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.redAccent),
                ),
              ),
            );
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text("No users found"));
          }

          final users = snapshot.data!;
          return ListView.builder(
            itemCount: users.length,
            padding: const EdgeInsets.all(8),
            itemBuilder: (context, index) {
              return Card(
                child: ListTile(
                  leading: const Icon(Icons.person),
                  title: Text(users[index]),
                  subtitle: Text("Environment: ${config.environment.name}"),
                ),
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            _usersFuture = _apiService.fetchUsers();
          });
        },
        backgroundColor: config.primaryColor,
        child: const Icon(Icons.refresh, color: Colors.white),
      ),
    );
  }
}
